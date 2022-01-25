export class Student {
    id: number = -1;
    name: string = "";
    patronym: string = "";
    surname: string = "";
    key: string = "";
    birthdate: Date = new Date();
    middleMark: number = .0;
    find: boolean = false;
    filtred: boolean = true;
    deleted: boolean = false;
    procDel: boolean = false;
    procEdit: boolean = false;


    constructor(id: number, name: string, patronym: string, surname: string, birthdate: Date, middleMark: number) {
        this.id = +id;
        this.name = name;
        this.patronym = patronym;
        this.surname = surname;
        this.birthdate = birthdate;
        this.middleMark = +middleMark;
        this.key = surname + name + patronym + this.dateKey();
    }

    // дата для ключа
    dateKey(): string {
        const date = this.birthdate.getDate();
        const month = this.birthdate.getMonth();
        const year = this.birthdate.getFullYear();
        let res = 10000;
        res *= year;
        res += (month * 100);
        res += date;
        return String(res);
    }
    // теперь через канал
    /*
    // дата в надлежащем виде
    niceBirthDate(): string {
        const date = this.birthdate.getDate();
        const month = this.birthdate.getMonth();
        const year = this.birthdate.getFullYear();
        let res = "";
        if (date < 10){
            res = "0";
        }
        res += date + ".";
        if (month < 9){
            res += "0";
        }
        res += (month + 1) + ".";
        res += year;
        return res;
    }
    */
    getFieldByKey (param: string): Date | number | string{
        switch (param){
            case "key":
                return this.key;
            case "name":
                return this.name;
            case "surname":
                return this.surname;
            case "patronym":
                return this.patronym;
            case "birthdate":
                return this.birthdate;
            default:
                break;
        }
        // если не вышли раньше, значит просят оценку
        return this.middleMark;
    }

    editStudent(name: string, patronym: string, surname: string, birthdate: Date, middleMark: number): void{
        this.name = name;
        this.patronym = patronym;
        this.surname = surname;
        this.birthdate = birthdate;
        this.middleMark = middleMark;
        this.key = surname + name + patronym + this.dateKey();
    }

    getAllFlags(): boolean[]{
        const flags: boolean[] = [];
        flags.push(this.middleMark < 3.0 ? true : false);
        flags.push(this.find);
        flags.push(this.procDel);
        flags.push(this.procEdit);
        return flags;
    }
}
