import { ActionCreator } from 'redux';
import {linkReduxType} from '../../type';

export enum linksActionTypes {
    LINK_ADD = 'LINK_ADD'
}
export type addLinkType = {
	type: linksActionTypes.LINK_ADD,
    data: linkReduxType
};

export type LinkActions = addLinkType;

export const addLinkAction: ActionCreator<addLinkType> = (data: linkReduxType) => ({
	type: linksActionTypes.LINK_ADD,
	data: data,
});
