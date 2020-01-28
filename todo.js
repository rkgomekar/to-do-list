var app = angular.module("todoApp", []);
app.controller('todoController', function ($scope) {
    $scope.todoList = [{ title: "My 1st to-do", done: false }]

    // This function is used to add a new to-do
    $scope.onTodoAdd = function () {
        if($scope.todoForm.$valid){
            $scope.todoList.push({ title: $scope.todoInput, done: false });

            // Clear the text input
            $scope.todoInput = "";
    
            // Reset the form
            $scope.todoForm.$setPristine(); // Not modified
            $scope.todoForm.$setUntouched(); // Not touched
        }

    }

    // This function is used to delete completed to-dos
    $scope.deleteTodo = function () {
        // One way
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
        });

        // Another way
        // for(var i= $scope.todoList.length-1; i>=0 ; i--) {
        //     let obj = $scope.todoList[i];
        //     if(obj.done){
        //         $scope.todoList.splice(i,1);
        //     }
        // }
    }
});