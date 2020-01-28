var app = angular.module("todoApp", []);
app.controller('todoController', function ($scope) {
    $scope.todoList = [{ title: "My 1st to-do", done: false }]

    $scope.onTodoAdd = function () {
        if(!$scope.todoForm.$invalid){
            $scope.todoList.push({ title: $scope.todoInput, done: false });
            $scope.todoInput = "";
    
            // Reset the form
            $scope.todoForm.$setPristine();
            $scope.todoForm.$setUntouched();
        }

    }

    $scope.deleteTodo = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
        });
    }
});