import { atom } from 'jotai';
import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from '../components/LeagueTable/Positions';
import { SAMPLE_LEAGUE_TABLE } from '../components/LeagueTable/SampleData';

/**
const initalValueAtom = atomWithQuery((get) => ({
  queryKey: ['leagueTable'],
  queryFn: getSampleData,
}));
**/
export const leagueTableAtom = atom(SAMPLE_LEAGUE_TABLE);

export const readOnlyAtom = atom((get) => get(leagueTableAtom));
export const updateTeamnameAtom = atom(null, (get, set, update) => {
  set(
    leagueTableAtom,
    recalculatePositionsWithRenamedTeam(
      update.team,
      update.updatedText,
      get(leagueTableAtom)
    )
  );
});

export const updateTeamPositionAtom = atom(null, (get, set, update) => {
  set(
    leagueTableAtom,
    recalculateSwappedPositions(
      update.sourceTeamId,
      update.targetTeamId,
      get(leagueTableAtom)
    )
  );
});
