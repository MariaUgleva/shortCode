import { ActionCreator } from 'redux';

export enum copiedLinkActionTypes {
    LINK_COPY = 'LINK_COPY'
}
export type copyLinkType = {
	type: copiedLinkActionTypes.LINK_COPY,
    id: string
};

export const copyLinkAction: ActionCreator<copyLinkType> = (id: string) => ({
	type: copiedLinkActionTypes.LINK_COPY,
	id: id,
});
