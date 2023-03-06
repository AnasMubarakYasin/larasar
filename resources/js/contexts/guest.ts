import entries from "@larasar/js/entry";
import AppCtx from "../lib/app-ctx";
import { Entriable, Entry } from "../lib/type";

export default class GuestCtx extends AppCtx implements Entriable {
    name = "Guest"
    index = "/"
    allow_splash = false;
    to_entry(): Entry {
        return entries.at(1)
    }
}