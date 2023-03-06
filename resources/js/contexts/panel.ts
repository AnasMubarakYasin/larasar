import entries from "@larasar/js/entry";
import AppCtx from "../lib/app-ctx";
import { Entriable, Entry, Panelable } from "../lib/type";
import Panel from "../panel";

export default class PanelCtx extends AppCtx implements Entriable, Panelable {
    name = "Panel"
    index = "/panel"
    to_entry(): Entry {
        return entries.at(1)
    }
    to_panel(): Panel {
        return new Panel();
    }
}