import React from "react";

export default class Traversal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    name: "Andhra Pradesh",
                    cities: [{name:"vijayawada",towns:[{name:"jaggayyapet"},
                            {name:"Nandigama"},],},
                            {name:"vizag",towns:[{name: "gajuwaka"},{name:"duvvada"}]}]
                }
            ]
        }
    }
}
