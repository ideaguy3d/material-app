/**
 * Created by julius alvarado on 11/14/2016.
 */

/// <reference path="vendingMachine.ts" />

let machine = new VendingMachine();
machine.size = VendingMachineSize.large;
ko.applyBindings(machine);


//\\