const initialState: userState = {
    users:[],
    loading:false,
    error:null
}

interface userState {
    users:any[],
    loading:boolean,
    error:null | string
}

export const userReducer =(state = initialState,action) =>
{
    switch(action.type)
    {

    }
}