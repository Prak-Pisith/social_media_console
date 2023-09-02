// State Pattern

export interface UserStatus {
  displayStatus(): string;
}

export class OnlineStatus implements UserStatus {
  displayStatus(): string {
    return 'Online';
  }
}

export class OfflineStatus implements UserStatus {
  displayStatus(): string {
    return 'Offline';
  }
}

export class BusyStatus implements UserStatus {
  displayStatus(): string {
    return 'Busy';
  }
}