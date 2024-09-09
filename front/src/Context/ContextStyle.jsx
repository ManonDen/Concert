import React, { useState, createContext } from 'react';

export const ContextTabStyle = createContext({
    styles: undefined ,
    UpdateTabStyle: () => {}
});




const MyTabStyle = ({ children }) => {
    const [ tabStyle ,setTabStyle ] = useState({
        styles: [] 
    });

    const UpdateTabStyle = (field,value) => {
        setTabStyle((elem)=>({...elem,[field]:value}))

    }
        return (
            <ContextTabStyle.Provider value={{ ...tabStyle,UpdateTabStyle }}>
                {children}
            </ContextTabStyle.Provider>
        )
}
export default MyTabStyle;