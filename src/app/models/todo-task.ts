export class TodoTask {
value: any;
    
    constructor(
        public text: string,
        public isCompleted: boolean = false,
        public isEditable: boolean = false
    ){}


}
