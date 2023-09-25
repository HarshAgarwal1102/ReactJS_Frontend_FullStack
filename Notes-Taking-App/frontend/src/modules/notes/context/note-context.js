import React from "react";

export const NoteContext = React.createContext(
    {
        notes:[], 
        total : 0, 
        getNotes : function(){},
        addSingleNote : function(){}
    });