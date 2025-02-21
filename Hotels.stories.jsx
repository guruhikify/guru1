import React from "react";
import {Hotels} from "./Hotels"

export default{
    title:'Components/Hotels',
    component:Hotels,
};
const Template=(args)=><Hotels {...args}/>;
export const hotels=Template.bind()