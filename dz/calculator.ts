class Calculator{
    private panelContent: string = "";

    pressButton(btn:string):void{
        this.panelContent += btn;
    }

    getPanelContents():string{
        return this.panelContent;
    }

}

export{
    Calculator
};