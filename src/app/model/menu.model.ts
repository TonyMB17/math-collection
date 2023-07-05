export class MenuModel
{
    optionName: string;
    route: string;
    icon: string;

    constructor(optionName: string, route: string, icon: string)
    {
        this.optionName=optionName;
        this.route=route;
        this.icon=icon;
    }
}