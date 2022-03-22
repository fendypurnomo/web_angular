import { Injectable } from '@angular/core';

const TOKEN_KEY = 'accessToken';
const USER_KEY = 'userData';
const LOGIN_KEY = 'isLoggedIn';
const SIDEBAR_KEY = 'sidebarToggled';

@Injectable({ providedIn: 'root' })
export class StorageService {
	constructor() {}

	public saveToken(token: string): void {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.setItem(TOKEN_KEY, token);
	}

	public getToken(): string | null {
		return localStorage.getItem(TOKEN_KEY);
	}

	public saveUser(user: any): void {
		localStorage.removeItem(USER_KEY);
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	public getUser(): any {
		const user = localStorage.getItem(USER_KEY);
		if (user) {
			return JSON.parse(user);
		}
		return {};
	}

	public saveLoggedIn(login: string): void {
		localStorage.removeItem(LOGIN_KEY);
		localStorage.setItem(LOGIN_KEY, login);
	}

	get getLoggedIn(): boolean | undefined {
		const isLoggedIn = localStorage.getItem(LOGIN_KEY);
		return isLoggedIn == 'true' ? true : false;
	}

	public saveSidebarToggled(sidebar: string): void {
		localStorage.removeItem(SIDEBAR_KEY);
		localStorage.setItem(SIDEBAR_KEY, sidebar);
	}

	get getSidebarToggled(): boolean | undefined {
		const sidebarToggled = localStorage.getItem(SIDEBAR_KEY);
		return sidebarToggled == 'sidebar-toggled' ? true : false;
	}

	signOut(): void {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_KEY);
		localStorage.removeItem(LOGIN_KEY);
		localStorage.removeItem(SIDEBAR_KEY);
	}
}
