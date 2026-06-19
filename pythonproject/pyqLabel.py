from PyQt6.QtWidgets import QWidget,QLabel,QApplication,QPushButton,QMainWindow,QHBoxLayout,QVBoxLayout
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Ravi Scientific Traders")
        button = QPushButton("Push it")
        button.clicked.connect(self.pushit)
        layout = QVBoxLayout()
        layout.addWidget(button)
        mainlayout = QWidget()
        mainlayout.setLayout(layout)

        
        self.setCentralWidget(mainlayout)
        
    def pushit(self):
        print("Called it")
        
if __name__ == "__main__":
    app = QApplication([])
    window = MainWindow()
    window.show()
    app.exec()
    
        
        
        