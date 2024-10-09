import userData from '../data/user.json';
import { ProfileData } from '../types';

class UserRepository {
  private user: ProfileData | null = null;

  constructor() {
    this.initializeUser();
  }

  private initializeUser() {
    this.user = userData as ProfileData;
  }

  getUserProfile() {
    return this.user;
  }

  updateUser(newData: Partial<ProfileData>) {
    if (this.user) {
      this.user = { ...this.user, ...newData };
    }
  }

  resetUser() {
    this.initializeUser();
  }
}

export default new UserRepository();
