import { jazminite } from 'CONTRIBUTORS';
import GameBranch from 'game/GameBranch';
import SPECS from 'game/SPECS';
import type Config from 'parser/Config';

import CHANGELOG from './CHANGELOG';
import { SupportLevel } from 'parser/Config';
import AlertInfo from 'interface/AlertInfo';

const config: Config = {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list. If someone goes MIA, they may be removed after major changes or during a new expansion.
  contributors: [jazminite],
  branch: GameBranch.Classic,
  // The WoW client patch this spec was last updated.
  patchCompatibility: null,
  supportLevel: SupportLevel.Unmaintained,
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: (
    <>
      Welcome! Thanks for using WoWAnalyzer to improve your overall Arcane Mage game play. The tool
      is under active development and may provide suggestions that are strange.
      <br />
      If you have any suggestions or comments, please submit a{' '}
      <a
        href="https://github.com/WoWAnalyzer/WoWAnalyzer/issues/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub issue
      </a>{' '}
      . Thanks and we hope you enjoy the tool!
    </>
  ),
  pages: {
    overview: {
      notes: <AlertInfo>Classic Cataclysm support is still a Work in Progress.</AlertInfo>,
    },
  },
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/GCKaR184npYPM3WF/57-Normal+Patchwerk+-+Kill+(1:29)/Bouncycastle',

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: SPECS.CLASSIC_MAGE_ARCANE,
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () =>
    import('./CombatLogParser' /* webpackChunkName: "ClassicArcaneMage" */).then(
      (exports) => exports.default,
    ),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: import.meta.url,
};

export default config;
