export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // JANGAN LUPA DIAPUS vvvv
    // token: "BQDbN_a3FLSPJdRj_xQTNzb-OvdwafApqRI434zXv-n7-VIWgcTe6ZOdVsgyiUyE6I7QNFuxz7FMhA58LLY3FhFTqcVFuXf8zScmSkdmRoPEFnQeB5SpJmbRE7MgT5pxHB_kc-OhnF-ZirOwm1zHx48IL-cCVcmB9TycXSOTS42qepN-",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly: action.discover_weekly
        }
        default: 
            return state;
    }
}

export default reducer;