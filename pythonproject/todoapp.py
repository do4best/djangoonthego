def main():
    tasks = []
    while True:
        print("====== TO DO List App =====")
        print("1. Add Task")
        print("2. Show Task")
        print("3. Mark Task as Done")
        print("4. Exit")

        choice = input("Enter Your Choice ")
        if choice == '1':
            print()
            n_task = int(input("Which Task No you want to add "))
            for i in range(n_task):
                task = input("Enter your Task: ")
                tasks.append({"Task":task,"done":False})
                print("Task is Added")

        elif choice == '2':
            print("\nTasks")
            for index,task in enumerate(tasks):
                status = "Done" if task["done"] else "not Done"
                print(f"{index + 1}.{task['task']} - {status}")

        elif choice == '3':
            task_index = int(input("Enter the task number to mark as done "))
            if 0 <= task_index < len(tasks):
                tasks[task_index]["done"] = True
                print("Task mark is done")
            else:
                print("Invalid Task Number.")

        elif choice == '4':
            print("Exiting the ToDo List")
            break
        else:
            print("Invalid choice. Please try again ")

if __name__ == "__main__":
    main()
