import { acrobatAptitude } from "./acrobat";
import { AptitudeObj } from "./aptitude-types";
import { deviserAptitude } from "./deviser";
import { opportunistAptitude } from "./opportunist";
import { scholarAptitude } from "./scholar";
import { seekerAptitude } from "./seeker";
import { strongarmAptitude } from "./strongarm";
import { survivalistAptitude } from "./survivalist";
import { watcherAptitude } from "./watcher";

const aptitudes: readonly AptitudeObj[] = [
  strongarmAptitude,
  survivalistAptitude,
  acrobatAptitude,
  seekerAptitude,
  deviserAptitude,
  scholarAptitude,
  watcherAptitude,
  opportunistAptitude,
] as const;

export { aptitudes };
