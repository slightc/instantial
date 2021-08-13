import { createDecorator, ServiceCollection, InstantiationService } from '../index'

interface IA {
    name: string;
}

const IA = createDecorator<IA>('a');

class A implements IA {
    public name: string = 'a';
}

class B {
    constructor(
        @IA public a: IA,
    ) { }
}

const services = new ServiceCollection();
const instantiationService = new InstantiationService(services);

services.set(IA, new A());
const b = instantiationService.createInstance(B)

console.log(b.a.name)

