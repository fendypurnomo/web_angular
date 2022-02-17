export class Toast {
	constructor(
		public id: string,
		public type?: ToastType,
		public message?: string,
		public autoClose: boolean = true,
		public keepAfterRouteChange: boolean = false,
		public fade: boolean = false
	) {}
}

export enum ToastType { Success, Error, Info, Warning }
