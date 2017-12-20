export const saveAuthInfoToLocalStorage = (authInfo, store) => {
	store.setItem('uid', authInfo.uid);
	store.setItem('accessToken', authInfo.accessToken);
	store.setItem('client', authInfo.client);
};

export const composeAuthInfoHeaderFromLocalStorage = store => {
	const uid = store.getItem('uid');
	const accessToken = store.getItem('accessToken');
	const client = store.getItem('client');

	return { 'access-token': accessToken, uid, client };
};

export const ifAuthPass = response => {
	return Boolean(response.ok);
};

export const getAuthInfoFromHeader = response => {
	return {
		uid: response.headers.get('uid'),
		client: response.headers.get('client'),
		accessToken: response.headers.get('access-token')
	};
};

export const validateLocalToken = (headers, Router, callBackIfPass) => {
	fetch('http://localhost:3000/admin_auth/validate_token', {
		method: 'GET',
		headers
	})
		.then(response => {
			ifAuthPass(response) ? (callBackIfPass(response)) : Router.push('/sign_in');
		})
		.catch(ex => {
			console.log('parsing failed', ex);
		});
};
