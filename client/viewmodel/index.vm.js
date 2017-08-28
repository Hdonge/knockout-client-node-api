var vm ={
    monkey:ko.observable()
};

vm.monkey("elephant");

ko.applyBindings(vm);