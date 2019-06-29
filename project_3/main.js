window.onload = () => {
  new Vue({
    el: '#app',
    data: {
      input: '',
      todos: [
        { text: 'Learn JavaScript', checked: true },
        { text: 'Learn Vue', checked: false },
        { text: 'Build something awesome', checked: false }
      ]
    },
    methods: {
      addTodo: function() {
        if (this.input !== '') {
          this.todos = [...this.todos, { text: this.input, checked: false }];
          this.input = '';
        }
      },
      check: function(i) {
        this.todos[i].checked = !this.todos[i].checked;
      },
      delTodo: function(i) {
        this.todos.splice(i, 1);
      },
      edit: function(e) {
        //e.target.classList.toggle("hide");
        this.toggleEdit(e);
      },
      toggleEdit: function(e) {
        // e.target.classList.toggle("hide");
        let ed = document.querySelector('.edit');

        ed.classList.toggle('hide');
        ed.previousElementSibling.classList.toggle('hide');
      }
    },
    updated() {
      window.componentHandler.upgradeDom();
    }
  });
};
