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
  checklist?: string[];
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
          "Install your password manager on the Surface first. Import browser passwords if needed, then delete the exported .csv. Make separate Personal and Work folders or collections.",
        checklist: [
          "Confirm you can unlock the password manager on the Surface.",
          "Create Personal and Work folders/collections.",
          "Move work logins into Work and personal logins into Personal as you find them.",
          "If the password manager stores 2FA codes, confirm those codes are visible before changing phones or accounts.",
        ],
        callouts: [
          {
            type: "info",
            text:
              "A password manager can also store your 2FA codes. That makes the phone step far easier and lowers lockout risk.",
          },
        ],
      },
      {
        id: "inventory-accounts-personal-email",
        title: "Inventory accounts under your personal email",
        body:
          "Search only your personal Gmail for accounts currently tied to it. The goal is not to move every email. The goal is to decide which services stay personal, which move to work, and which need a 2FA or account change.",
        checklist: [
          "Use personal Gmail as the source inbox. Do not search the work account for this step.",
          "Use the work email only as the target for services that should move to work.",
          "Prioritize Jan 1, 2024 through today. Include older emails only if they show an active subscription, business tool, tax/business expense, license, warranty, domain/hosting, security alert, or 2FA risk.",
          "Ignore old one-time personal shopping receipts unless they prove a warranty, license, business expense, or active account.",
          "Build a table: Service | Evidence found | Most recent relevant date | Current email | Lane | Recommended action | What needs to move | What does NOT need to move | Target email | 2FA type | Priority | Done.",
        ],
      },
      {
        id: "export-data-to-keep",
        title: "Export only data worth archiving",
        body:
          "Do not export all of personal Gmail just because you are setting up a Mac. Export only archives that would be painful to lose or that cannot be moved cleanly later.",
        checklist: [
          "Claude: Settings > Privacy > Export data. Keep this as an archive because it cannot be imported into the new work account.",
          "ChatGPT: Settings > Data controls > Export. Keep this as an archive because history, memory, and projects do not import into a new account.",
          "Google Takeout: use only for specific personal-Google data you want archived or copied, such as selected Drive folders, Photos, Contacts, or Calendar.",
          "You do not need to export your entire personal Gmail if you will keep using it.",
          "Keep personal Gmail available on the Mac in a separate personal browser profile.",
        ],
        callouts: [
          {
            type: "warning",
            text:
              "Claude and ChatGPT exports are archives only. They have no import into the new account.",
          },
        ],
      },
      {
        id: "audit-2fa",
        title: "Audit your 2FA",
        body:
          "Mark each important account as SMS, authenticator app, password-manager code, hardware key, or none. Flag every authenticator-app account before touching your phone setup.",
        checklist: [
          "Start with email, Apple ID, Google, GitHub, banking, domains, hosting, SaaS, Claude, ChatGPT, and password manager.",
          "For every authenticator-app account, write down where the code currently lives.",
          "Do not reset or trade in the old phone until every important 2FA code has been migrated and tested.",
        ],
      },
    ],
  },
  {
    id: "phase-1",
    label: "PHASE 1",
    title: "Set up the Mac like a safe work machine",
    steps: [
      {
        id: "run-setup-assistant",
        title: "Run Setup Assistant as a clean start",
        body:
          "When the Mac asks whether to transfer data, choose the clean-start option. This keeps the Mac from copying over old Windows clutter, mixed personal/work files, and confusing browser state.",
        checklist: [
          "At 'Transfer your data to this Mac,' choose 'Set up this Mac without transferring any data.'",
          "Do not use Migration Assistant from the Surface.",
          "Set region, language, Wi-Fi, Location Services, and analytics normally.",
          "You can still manually bring over specific work files, repos, exports, and passwords later.",
        ],
        callouts: [
          {
            type: "info",
            text:
              "Clean start does not delete anything from the Surface, personal Gmail, Google Drive, or your password manager. It only keeps the new Mac from bulk-importing old state.",
          },
        ],
      },
      {
        id: "apple-id-personal",
        title: "Use your personal Apple ID",
        body:
          "Use your existing personal Apple ID for the Mac unless you already have a managed work Apple Account. Your Apple ID does not need to be your work identity.",
        checklist: [
          "Sign in with your personal Apple ID during setup or later in System Settings.",
          "Use the Apple ID for App Store, Find My, device recovery, iCloud, and Apple purchases.",
          "Use work identity inside work apps: Chrome work profile, Google Workspace, Claude, ChatGPT, Slack, GitHub, Notion, Vercel, Supabase.",
          "Do not create a separate macOS user account unless you later decide you want a hard wall between personal and work.",
        ],
        callouts: [
          {
            type: "info",
            text:
              "The separation comes from browser profiles, app logins, file locations, and 2FA discipline. It does not require a work Apple ID.",
          },
        ],
      },
      {
        id: "icloud-drive-safety",
        title: "Set iCloud Drive safely before storing work files",
        body:
          "This is the big safety setting. If Desktop & Documents sync is on under your personal Apple ID, files saved there can sync into personal iCloud. Keep work files out of personal iCloud by default.",
        checklist: [
          "Open System Settings > your name > iCloud > Drive or iCloud Drive.",
          "If iCloud Drive is on, treat it as personal Apple storage unless you intentionally decide otherwise.",
          "Turn off Desktop & Documents Folders unless you intentionally want everything on your Desktop and in Documents synced to personal iCloud.",
          "Do not use Desktop as a work dumping ground.",
          "Create work folders outside iCloud-controlled areas, such as Work and Developer in your home folder.",
          "Use work Google Drive for work documents that need cloud sync or sharing.",
        ],
        callouts: [
          {
            type: "warning",
            text:
              "If Desktop & Documents Folders is on, files in those folders can sync under your personal Apple ID. That is convenient for personal files, but risky for work separation.",
          },
        ],
        commands: ["mkdir -p ~/Work ~/Developer ~/Downloads/Inbox"],
      },
      {
        id: "filevault-touch-id",
        title: "Enable FileVault, Touch ID, and lock settings",
        body:
          "Turn on the security basics before the Mac starts holding work data.",
        checklist: [
          "Open System Settings > Privacy & Security > FileVault, then turn FileVault on.",
          "Save the FileVault recovery key in your password manager.",
          "Open System Settings > Touch ID & Password and add your fingerprint.",
          "Set 'Require password after screen saver begins or display is turned off' to Immediately or 5 seconds.",
          "Learn the lock shortcut: Control+Command+Q.",
        ],
      },
      {
        id: "update-macos",
        title: "Update macOS",
        body:
          "Update before installing a lot of apps. This avoids setup problems caused by old system components.",
        checklist: [
          "Open System Settings > General > Software Update.",
          "Install all available macOS updates.",
          "Restart when asked.",
          "After restart, check Software Update once more until it says the Mac is up to date.",
        ],
      },
      {
        id: "learn-the-basics",
        title: "Learn the Windows-to-Mac basics",
        body:
          "Do this before judging the Mac. The friction is mostly vocabulary and muscle memory.",
        checklist: [
          "Spotlight search: Command+Space. Use it like the Start menu.",
          "Quit an app: Command+Q. The red dot usually closes only the window, not the app.",
          "Switch apps: Command+Tab. Switch windows within the same app: Command+`.",
          "Copy, paste, undo, select all: Command+C, Command+V, Command+Z, Command+A.",
          "Right-click: two-finger tap on the trackpad.",
          "Screenshots: Command+Shift+4 for selection, Command+Shift+5 for the screenshot tool.",
          "Finder is File Explorer. The left sidebar is where you pin Work, Developer, Downloads, Google Drive, and personal folders.",
        ],
        callouts: [
          {
            type: "info",
            text: "Coming from Windows: Command replaces Ctrl for almost every shortcut.",
          },
        ],
      },
      {
        id: "dock-like-taskbar",
        title: "Make the Dock feel like your Windows taskbar",
        body:
          "The Dock is the Mac version of your pinned taskbar. Set it up intentionally so work and personal tools are easy to recognize.",
        checklist: [
          "Open System Settings > Desktop & Dock.",
          "Set Position on screen to Bottom if you want it closest to Windows.",
          "Turn off 'Show recent applications in Dock' if you want a clean pinned-only feel.",
          "Open each must-have app, right-click its Dock icon, then choose Options > Keep in Dock.",
          "Suggested pinned order: Finder, Chrome, Google Drive if installed, Claude, ChatGPT, Slack/Teams, Calendar, Notes, Terminal, System Settings.",
          "Drag Work, Developer, Downloads/Inbox, and Google Drive to the right side of the Dock for quick folder access.",
        ],
      },
      {
        id: "separate-browser-profiles",
        title: "Create unmistakable Chrome profiles",
        body:
          "This replaces the Windows taskbar trick where personal Chrome has your face and work Chrome has the company logo. On Mac, Chrome profiles are still the cleanest separation layer.",
        checklist: [
          "Install Chrome, then open Chrome.",
          "Click the profile icon in the top-right corner > Add Chrome profile.",
          "Create WORK - Intersection. Sign in with the work Google account. Use the company logo or a clearly work-coded avatar if available, and choose a strong work color like blue.",
          "Create PERSONAL - James. Sign in with personal Gmail. Use your face/avatar and a different color.",
          "In each profile, open Profile > Customize profile and make the name, color, and avatar impossible to confuse.",
          "In Chrome profile manager, turn on 'Show on startup' so Chrome asks which profile to open.",
          "Never sign into work tools from the personal profile. Never connect Claude/ChatGPT Google integrations to the personal profile.",
        ],
        callouts: [
          {
            type: "info",
            text:
              "The Dock may still show one Chrome app icon, so make the Chrome profile name, avatar, theme color, and startup picker do the identity work.",
          },
        ],
      },
      {
        id: "work-file-zones",
        title: "Create work and personal file zones",
        body:
          "The point is not to hide personal files from the Mac. The point is to stop work files from drifting into personal iCloud or random Downloads/Desktop piles.",
        checklist: [
          "Use ~/Work for active work documents that are local-only or temporary.",
          "Use ~/Developer for repos and Claude Code projects.",
          "Use work Google Drive for work docs that need cloud sync or sharing.",
          "Use personal iCloud Drive only for personal Apple ecosystem files.",
          "Use Downloads/Inbox as a sorting area. Empty it weekly into Work, Developer, Google Drive, or Personal.",
          "Pin Work, Developer, Downloads/Inbox, and Google Drive in Finder Favorites.",
        ],
        commands: ["mkdir -p ~/Work ~/Developer ~/Downloads/Inbox"],
      },
      {
        id: "finder-trackpad-hotkeys",
        title: "Tune Finder, trackpad, and daily navigation",
        body:
          "These settings make the Mac feel less foreign in the first week.",
        checklist: [
          "Finder > Settings > General: set 'New Finder windows show' to your home folder or Work.",
          "Finder > Settings > Sidebar: show Home, Desktop, Documents, Downloads, iCloud Drive, external disks, and connected servers only if useful.",
          "Finder > View > Show Path Bar. This helps you see exactly where files live.",
          "System Settings > Trackpad: turn on Tap to click and Secondary click.",
          "System Settings > Keyboard > Keyboard Shortcuts: review Mission Control and Screenshots.",
          "Use Command+Space for launching apps instead of hunting in Finder.",
        ],
      },
      {
        id: "notifications-focus",
        title: "Set notifications and Focus modes",
        body:
          "Keep the Mac calm. Let work apps notify you during work time, but avoid personal-account noise while you are working.",
        checklist: [
          "Open System Settings > Notifications.",
          "Allow important work apps: Calendar, Slack/Teams, Zoom, Gmail if you use the app.",
          "Turn off or soften nonessential personal notifications.",
          "Open System Settings > Focus and create Work Focus if you want work-only alerts during the day.",
          "Do not let personal Gmail notifications become your work command center.",
        ],
      },
      {
        id: "install-essential-apps",
        title: "Install essential apps",
        body:
          "Install only the core apps first. Sign into each with the correct identity so the Mac starts clean.",
        checklist: [
          "Chrome: create the two profiles before installing lots of extensions.",
          "Password manager: install your manager and verify you can unlock it.",
          "Google Drive for desktop: sign into the work account if you need work Drive sync.",
          "Claude desktop and ChatGPT desktop: sign in with work accounts after Phase 2.",
          "Work comms: Slack, Teams, Zoom, Google Meet/Calendar as needed.",
          "Developer basics come later in Phase 4: Homebrew, Git, Node, SSH, Claude Code.",
        ],
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
          "Sign up at claude.ai with Continue with Google using the work account. Subscribe to Max or Team if needed. Install the desktop app. Keep personal Claude as Free on the Surface or personal profile.",
        callouts: [
          {
            type: "transfer",
            transfers: "Nothing automatic",
            notTransfers:
              "Chat history, Projects, custom styles, memory. The new account starts empty.",
          },
        ],
      },
      {
        id: "chatgpt-start-fresh",
        title: "ChatGPT (start fresh)",
        body:
          "Copy your Custom Instructions/Memory to a note first. Sign up at chatgpt.com with Google using the work account. Subscribe if needed. Recreate instructions.",
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
          "Live out of the work Google account for work. Keep personal Gmail available, but do not connect work AI tools to personal Google unless you intentionally choose to.",
        checklist: [
          "Work Gmail: use it for work communication going forward.",
          "Calendar: move or recreate work events in the work calendar. Leave personal events personal.",
          "Drive: share and copy small work sets, or use Takeout/re-upload for bulk work files.",
          "Turn on forwarding from personal Gmail to work only for work-related mail during a grace period.",
          "Do not migrate every personal receipt or personal email archive.",
        ],
        callouts: [
          {
            type: "info",
            text:
              "Goal: work data lives under the work domain so Claude's Google integrations act on work data, not personal data.",
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
            transfers: "Everything. Same account, repos/stars/history stay.",
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
          "Use this repeatable pattern for most services: log in > Settings > change email to work if it is work-related > verify > update password manager > migrate its 2FA > mark Done. Skip anything you marked Keep personal.",
        callouts: [
          {
            type: "info",
            text:
              "Unlike the AI apps, most services let you change the email and keep all data.",
          },
        ],
      },
      {
        id: "work-saas",
        title: "Work SaaS (Notion, Slack, Figma)",
        body:
          "Either change the account email to work, or have a team admin invite your work email to the existing workspace. Reconnect tools that plug into Claude (Notion, Supabase, Vercel) to their work versions.",
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
        title: "Keep your personal Apple ID on the phone",
        body:
          "Recommended: keep your personal Apple ID on the phone and Mac. Sign into Claude, Gmail, Slack, and other work apps with work accounts inside each app.",
        callouts: [
          {
            type: "warning",
            text:
              "Switching the phone's primary Apple ID signs you out of personal iCloud and can forfeit apps bought under the old Apple ID. You do not need a work Apple ID to use work accounts inside apps.",
          },
        ],
      },
      {
        id: "migrate-authenticator",
        title: "Migrate your authenticator before changing the phone",
        body:
          "This is the highest lockout risk. Migrate and verify before removing the old device.",
        checklist: [
          "If your 2FA codes are in your password manager, verify they work from the password manager.",
          "Google Authenticator: use Transfer accounts > Export, then Import on the new device.",
          "Authy: sign in to restore if your setup supports it.",
          "SMS: okay as long as you keep your phone number.",
          "Test the new code before removing the old device.",
        ],
        callouts: [
          {
            type: "warning",
            text:
              "This is the number one lockout cause. Do not wipe or trade in the old phone until 2FA is verified.",
          },
        ],
      },
      {
        id: "install-work-apps-phone",
        title: "Install work apps on the phone",
        body: "Claude, Gmail, Slack, and other work apps should use work credentials inside each app.",
        checklist: [
          "Add the work Google account inside Gmail.",
          "Sign into Claude with the work account.",
          "Sign into Slack/Teams/Zoom with work credentials.",
          "Keep personal apps signed into personal accounts.",
        ],
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
          "Authenticate with the work Claude account, the one with your paid subscription.",
        commands: ["npm install -g @anthropic-ai/claude-code", "claude"],
      },
      {
        id: "reconnect-mcp",
        title: "Reconnect MCP servers / integrations",
        body:
          "Reconnect Google Workspace, GitHub, and any others (Notion, Supabase, Vercel) to the work accounts. Use the /mcp command in Claude Code.",
      },
      {
        id: "clone-repos",
        title: "Clone your repos",
        commands: ["git clone git@github.com:your-org/your-repo.git"],
      },
    ],
  },
];
