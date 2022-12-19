import { NotesItem } from "../../../shared/types/ProjectOverview"
import notes from "../../../util/fakeData/notes"

export default function useBodyShopOverviewAPI() {
  const getNotes = (Cb: (data: NotesItem[]) => void) => Cb(notes)

  return { getNotes }
}
