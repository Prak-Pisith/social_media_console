"use strict";
// State Pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusyStatus = exports.OfflineStatus = exports.OnlineStatus = void 0;
class OnlineStatus {
    displayStatus() {
        return 'Online';
    }
}
exports.OnlineStatus = OnlineStatus;
class OfflineStatus {
    displayStatus() {
        return 'Offline';
    }
}
exports.OfflineStatus = OfflineStatus;
class BusyStatus {
    displayStatus() {
        return 'Busy';
    }
}
exports.BusyStatus = BusyStatus;
