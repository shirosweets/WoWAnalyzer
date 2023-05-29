import { Vetyst, Seriousnes } from 'CONTRIBUTORS';
import Expansion from 'game/Expansion';
import SPECS from 'game/SPECS';
import { AlertWarning } from 'interface';
import Config from 'parser/Config';

import CHANGELOG from './CHANGELOG';

const config: Config = {
  contributors: [Vetyst, Seriousnes],
  expansion: Expansion.Dragonflight,
  patchCompatibility: '10.1.0',
  isPartial: false,
  description: (
    <>
      <AlertWarning>
        Analytics are being developed for a level 70 dragonflight character on beta. Right now the
        Enhancement Analyzer is a work-in-progress, and only holds very basic functionality.
      </AlertWarning>
      <br />
      Hey there! Thanks for checking out the Enhancement Analyzer. If you have any feedback or
      suggestions, feel free to reach out to Vetyst via Discord (Vetyst#0001) or drop an issue in
      the GitHub repo.
    </>
  ),
  exampleReport:
    '/report/aK2vDdWLGjhqzktn/21-Normal+Dathea,+Ascended+-+Kill+(5:11)/Shmaddy/standard',
  spec: SPECS.ENHANCEMENT_SHAMAN,
  changelog: CHANGELOG,
  guideDefault: false,
  parser: () =>
    import('./CombatLogParser' /* webpackChunkName: "EnhancementShaman" */).then(
      (exports) => exports.default,
    ),

  path: __dirname,
};

export default config;
