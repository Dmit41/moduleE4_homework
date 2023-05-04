class ElAppliances {
    constructor(name) {
        this.name = name;
        this.turnOn = function(){
            console.log(`The ${name} is plugged into an outlet`)
        }
        this.turnOff = function(){
            console.log(`The ${name} is unplugged from the outlet`)
        }
    }

}

class PersonalItem extends ElAppliances{
    constructor(name, useFor) {
        super(name)
        this.useFor = useFor
    }

}

const phone = new PersonalItem('Phone','Communication')
phone.info = function(){
    console.log(`The ${phone.name} is used for ${phone.useFor}`)
}

const teapot = new ElAppliances('Teapot');
teapot.location = 'Kitchen'

const tv = new ElAppliances('TV');

teapot.turnOn()
teapot.turnOff()

tv.turnOn()

phone.info()
phone.turnOn()