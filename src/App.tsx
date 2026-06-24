import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Callout, phases, Step } from "./content";

type PersistedState = {
  checked: Record<string, boolean>;
  expanded: Record<string, boolean>;
};

const STORAGE_KEY = "surface-to-mac-migration-assistant:v1";

const defaultExpanded = () =>
  Object.fromEntries(phases.map((phase) => [phase.id, true])) as Record<string, boolean>;

const defaultState = (): PersistedState => ({
  checked: {},
  expanded: defaultExpanded(),
});

const loadState = (): PersistedState => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();

    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      checked: parsed.checked ?? {},
      expanded: { ...defaultExpanded(), ...(parsed.expanded ?? {}) },
    };
  } catch {
    return defaultState();
  }
};

const allSteps = phases.flatMap((phase) => phase.steps);

function App() {
  const [state, setState] = useState<PersistedState>(() => loadState());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const completedCount = useMemo(
    () => allSteps.filter((step) => state.checked[step.id]).length,
    [state.checked],
  );
  const totalCount = allSteps.length;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const setStepChecked = (stepId: string, isChecked: boolean) => {
    setState((current) => ({
      ...current,
      checked: { ...current.checked, [stepId]: isChecked },
    }));
  };

  const togglePhase = (phaseId: string) => {
    setState((current) => ({
      ...current,
      expanded: { ...current.expanded, [phaseId]: !current.expanded[phaseId] },
    }));
  };

  const resetProgress = () => {
    if (!window.confirm("Reset all checklist progress and expanded phases?")) return;

    window.localStorage.removeItem(STORAGE_KEY);
    setState(defaultState());
  };

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="product-label">Local checklist</p>
          <h1>Surface → Mac Migration Assistant</h1>
          <p className="hero-text">
            Walk through the migration in order while keeping work and personal identities
            separate.
          </p>
        </div>

        <section className="progress-panel" aria-label="Overall migration progress">
          <div className="progress-row">
            <span>Overall progress</span>
            <strong>
              {completedCount} / {totalCount} done
            </strong>
          </div>
          <progress value={completedCount} max={totalCount} aria-label={`${progressPercent}% done`}>
            {progressPercent}%
          </progress>
          <div className="progress-percent">{progressPercent}% complete</div>
        </section>
      </header>

      <section className="notice" aria-label="Important sequencing note">
        <strong>Do phases in order</strong>
        <span>Later steps assume earlier ones.</span>
      </section>

      <div className="toolbar">
        <button className="secondary-button" type="button" onClick={resetProgress}>
          Reset progress
        </button>
      </div>

      <section className="phase-list" aria-label="Migration phases">
        {phases.map((phase) => {
          const doneInPhase = phase.steps.filter((step) => state.checked[step.id]).length;
          const phaseComplete = doneInPhase === phase.steps.length;
          const isExpanded = state.expanded[phase.id] ?? true;

          return (
            <article className={`phase ${phaseComplete ? "phase-complete" : ""}`} key={phase.id}>
              <button
                className="phase-toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`${phase.id}-steps`}
                onClick={() => togglePhase(phase.id)}
              >
                <span className="phase-title-group">
                  <span className="phase-label">{phase.label}</span>
                  <span className="phase-title">{phase.title}</span>
                </span>
                <span className="phase-meta">
                  {phaseComplete && <span className="phase-check" aria-label="Phase complete">✓</span>}
                  <span>
                    {doneInPhase} / {phase.steps.length} done
                  </span>
                  <span className="chevron" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </span>
              </button>

              {isExpanded && (
                <div className="steps" id={`${phase.id}-steps`}>
                  {phase.steps.map((step) => (
                    <ChecklistStep
                      checked={Boolean(state.checked[step.id])}
                      key={step.id}
                      onChange={(isChecked) => setStepChecked(step.id, isChecked)}
                      step={step}
                    />
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}

type ChecklistStepProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  step: Step;
};

function ChecklistStep({ checked, onChange, step }: ChecklistStepProps) {
  return (
    <article className={`step ${checked ? "step-complete" : ""}`}>
      <label className="step-heading">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.currentTarget.checked)}
        />
        <span>{step.title}</span>
      </label>

      {step.body && <InstructionText text={step.body} />}

      {step.callouts?.map((callout, index) => (
        <CalloutBox callout={callout} key={`${step.id}-callout-${index}`} />
      ))}

      {step.commands && (
        <div className="command-list" aria-label={`${step.title} commands`}>
          {step.commands.map((command) => (
            <CommandBlock command={command} key={command} />
          ))}
        </div>
      )}
    </article>
  );
}

function InstructionText({ text }: { text: string }) {
  return (
    <div className="instruction">
      {text.split(/\n{2,}/).map((paragraph, index) => (
        <p key={`${paragraph}-${index}`}>{renderInlineLinks(paragraph)}</p>
      ))}
    </div>
  );
}

function renderInlineLinks(text: string) {
  const pieces: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) pieces.push(text.slice(lastIndex, match.index));
    pieces.push(
      <a href={match[2]} key={`${match[1]}-${match.index}`} rel="noreferrer" target="_blank">
        {match[1]}
      </a>,
    );
    lastIndex = linkPattern.lastIndex;
  }

  if (lastIndex < text.length) pieces.push(text.slice(lastIndex));
  return pieces;
}

function CalloutBox({ callout }: { callout: Callout }) {
  if (callout.type === "transfer") {
    return (
      <div className="transfer-callout">
        <div>
          <span>What transfers</span>
          <p>{callout.transfers}</p>
        </div>
        <div>
          <span>What does NOT transfer</span>
          <p>{callout.notTransfers}</p>
        </div>
      </div>
    );
  }

  return (
    <aside className={`callout callout-${callout.type}`}>
      <strong>{callout.type === "warning" ? "Warning" : "Info"}</strong>
      <p>{callout.text}</p>
    </aside>
  );
}

function CommandBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = command;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="command-block">
      <code>{command}</code>
      <button type="button" onClick={copyCommand}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default App;
