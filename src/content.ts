export type StandardCallout = {
  type: "warning" | "info";
  text: string;
};

export type TransferCallout = {
  type: "transfer";
  transfers: string;
  notTransfers: string;
};

export type Callout = StandardCallout | TransferCallout;

export type Step = {
  id: string;
  title: string;
  body?: string;
  callouts?: Callout[];
  commands?: string[];
};

export type Phase = {
  id: string;
  label: string;
  title: string;
  steps: Step[];
};

export const phases: Phase[] = [
  {
    id: "phase-0",
    label: "PHASE 0",
    title: "Safety net (do before changing anything)",
    steps: [
      {
        id: "install-password-manager",
        title: "Install a password manager",
        body:
          "Install 1Password or Bitwarden on the Surface first. Import browser passwords, then delete the exported .csv. Make \"Personal\" and \"Work\" folders.",
        callouts: [
          {
            type: "info",
            text:
              "1Password/Bitwarden can also store your 2FA codes — this makes the phone step far easier.",
          },
        ],
      },
      {
        id: "inventory-accounts-personal-email",
        title: "Inventory accounts under your personal email",
        body:
          "Search your inbox for: welcome, verify your email, your receipt, subscription, new device. Build a table: Service | Current email | Keep or Move | New email | 2FA type | 2FA moved | Done.",
      },
      {
        id: "export-data-to-keep",
        title: "Export data to keep",
        body:
          "Claude (Settings > Privacy > Export data), ChatGPT (Settings > Data controls > Export), Google Takeout (Mail, Drive, Photos, Contacts, Calendar).",
        callouts: [
          {
            type: "warning",
            text:
              "These exports are archives only. Claude and ChatGPT have NO import on the new account.",
          },
        ],
      },
      {
        id: "audit-2fa",
        title: "Audit your 2FA",
        body:
          "Mark each account as SMS / authenticator app / none. Flag every authenticator-app account — do NOT reset your phone until those are migrated.",
      },
    ],
  },
  {
    id: "phase-1",
    label: "PHASE 1",
    title: "Set up the Mac",
    steps: [
      {
        id: "run-setup-assistant",
        title: "Run Setup Assistant (clean start)",
        body:
          "Choose 'Don't transfer' at the Migration Assistant prompt. Sign in with your WORK-domain Apple ID on the Mac. Enable FileVault (save the recovery key to your password manager) and Touch ID.",
      },
      {
        id: "update-macos",
        title: "Update macOS",
        body: "System Settings > General > Software Update.",
      },
      {
        id: "learn-the-basics",
        title: "Learn the basics",
        body:
          "Spotlight = Cmd+Space. Quit app = Cmd+Q (closing the red dot only closes the window). Right-click = two-finger tap. Screenshot = Cmd+Shift+4. App switch = Cmd+Tab. Finder = the file manager.",
        callouts: [
          {
            type: "info",
            text: "Coming from Windows: Cmd replaces Ctrl for almost every shortcut.",
          },
        ],
      },
      {
        id: "separate-browser-profiles",
        title: "Create separate browser profiles",
        body:
          "Install Chrome. Make a WORK profile (work Workspace) and a PERSONAL profile. Keep them separate so identities never mix.",
      },
      {
        id: "install-essential-apps",
        title: "Install essential apps",
        body:
          "Chrome, password manager, Claude desktop, ChatGPT desktop, work comms (Slack/Teams/Zoom). Sign into AI apps after Phase 2.",
      },
    ],
  },
  {
    id: "phase-2",
    label: "PHASE 2",
    title: "Migrate accounts",
    steps: [
      {
        id: "claude-start-fresh",
        title: "Claude (start fresh)",
        body:
          "Sign up at claude.ai with 'Continue with Google' (work account). Subscribe to Max (~$200/mo individual) or Team (per-seat business). Install the desktop app. Keep personal Claude as Free on the Surface.",
        callouts: [
          {
            type: "transfer",
            transfers: "Nothing automatic",
            notTransfers:
              "Chat history, Projects, custom styles, memory — new account starts empty",
          },
        ],
      },
      {
        id: "chatgpt-start-fresh",
        title: "ChatGPT (start fresh)",
        body:
          "Copy your Custom Instructions/Memory to a note first. Sign up at chatgpt.com with Google (work). Subscribe (Plus $20 / Pro $200 / Team). Recreate instructions.",
        callouts: [
          {
            type: "transfer",
            transfers: "Nothing automatic",
            notTransfers: "History, Custom Instructions, Memory, saved GPTs, Projects",
          },
        ],
      },
      {
        id: "google-workspace",
        title: "Google Workspace (the big one)",
        body:
          "In work Gmail > Settings > Accounts and Import > Import mail and contacts (from personal Gmail). Calendar: export .ics from personal, import to work. Drive: share+copy small sets, or Takeout+re-upload bulk. Turn on forwarding from personal Gmail to work for a grace period.",
        callouts: [
          {
            type: "info",
            text:
              "Goal: live out of the work domain so Claude's Google integrations act on work data.",
          },
        ],
      },
      {
        id: "github-email",
        title: "GitHub (keep the account, swap the email)",
        body: "Settings > Emails > add work email > verify > set Primary + commit email.",
        callouts: [
          {
            type: "transfer",
            transfers: "Everything — same account, repos/stars/history stay",
            notTransfers: "Nothing",
          },
        ],
        commands: [
          "git config --global user.email \"you@workdomain.com\"",
          "git config --global user.name \"Your Name\"",
        ],
      },
      {
        id: "long-tail-tools",
        title: "Long-tail tools (Lyft, etc.)",
        body:
          "(repeatable pattern): log in > Settings > change email to work > verify > update password manager > migrate its 2FA > mark Done. Skip anything you marked 'Keep' (e.g. personal banking — just keep its login + 2FA in your password manager).",
        callouts: [
          {
            type: "info",
            text:
              "Unlike the AI apps, most services let you change the email and KEEP all data.",
          },
        ],
      },
      {
        id: "work-saas",
        title: "Work SaaS (Notion, Slack, Figma)",
        body:
          "Either change the account email to work, OR have a team admin invite your work email to the existing workspace. Reconnect tools that plug into Claude (Notion, Supabase, Vercel) to their work versions.",
      },
    ],
  },
  {
    id: "phase-3",
    label: "PHASE 3",
    title: "Phone, Apple ID & 2FA",
    steps: [
      {
        id: "phone-apple-id",
        title: "Decide your phone's Apple ID",
        body:
          "(recommended): keep your PERSONAL Apple ID on the phone; just sign into Claude, Gmail, Slack with your WORK accounts inside each app.",
        callouts: [
          {
            type: "warning",
            text:
              "Switching the phone's primary Apple ID signs you out of personal iCloud and forfeits apps bought under the old Apple ID. You do NOT need a work Apple ID to use work accounts inside apps.",
          },
        ],
      },
      {
        id: "migrate-authenticator",
        title: "Migrate your authenticator BEFORE changing the phone",
        body:
          "If your 2FA codes are in your password manager, nothing to do. Google Authenticator: ... > Transfer accounts > Export, then Import on the new device. Authy: sign in to restore. SMS: fine as long as you keep your number.",
        callouts: [
          {
            type: "warning",
            text:
              "This is the #1 lockout cause. Migrate and verify before removing the old device.",
          },
        ],
      },
      {
        id: "install-work-apps-phone",
        title: "Install work apps on the phone",
        body: "Claude, Gmail (add work account), Slack — sign in with WORK credentials.",
      },
    ],
  },
  {
    id: "phase-4",
    label: "PHASE 4",
    title: "Dev environment (Claude Code on the Mac)",
    steps: [
      {
        id: "install-homebrew-core-tools",
        title: "Install Homebrew + core tools",
        commands: [
          "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"",
          "brew install git node",
          "xcode-select --install",
        ],
      },
      {
        id: "configure-git-work",
        title: "Configure git for work",
        commands: [
          "git config --global user.email \"you@workdomain.com\"",
          "git config --global user.name \"Your Name\"",
        ],
      },
      {
        id: "create-ssh-key",
        title: "Create a new SSH key and add it to GitHub",
        body:
          "Paste it at GitHub > Settings > SSH and GPG keys > New SSH key. Test with:",
        commands: [
          "ssh-keygen -t ed25519 -C \"you@workdomain.com\"",
          "pbcopy < ~/.ssh/id_ed25519.pub",
          "ssh -T git@github.com",
        ],
      },
      {
        id: "install-claude-code",
        title: "Install Claude Code and sign in",
        body:
          "Authenticate with the WORK Claude account (the one with your Max subscription).",
        commands: ["npm install -g @anthropic-ai/claude-code", "claude"],
      },
      {
        id: "reconnect-mcp",
        title: "Reconnect MCP servers / integrations",
        body:
          "Reconnect Google Workspace, GitHub, and any others (Notion, Supabase, Vercel...) to the WORK accounts. Use the /mcp command in Claude Code.",
      },
      {
        id: "clone-repos",
        title: "Clone your repos",
        commands: ["git clone git@github.com:your-org/your-repo.git"],
      },
    ],
  },
];
