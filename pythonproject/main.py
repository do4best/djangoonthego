import sys
from PyQt6 import QtWidgets,QtCore,QtGui
from thecacluclator import Ui_Form
class MainWindow(QtWidgets.QWidget):
    ERROR_MSG = "ERROR "
    MAX_FONT_SIZE = 100
    MIN_FONT_SIZE = 30
    FONT_SIZE_THRESHOLD = [item for item in enumerate(range(90,30,-5),9)]
    
    def __init__(self):
        super().__init__()
        
        self._dragPos = None
        self.new_input_flag = None
        self.prev_text = ""
        self.curr_text = ""
        self.show_text = ""
        self.operator = ""
        
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        
        self.output = self.ui.lineEdit
        self.close_btn = self.ui.close_Btn
        self.clear_btn = self.ui.pushButton_5
        self.plus_minus_btn = self.ui.pushButton_15
        self.percent_btn = self.ui.pushButton_2
        self.addition_btn = self.ui.pushButton_6
        self.minus_btn = self.ui.pushButton_18
        self.division_btn = self.ui.pushButton_10
        self.multi_btn = self.ui.pushButton_14
        
        self.operator_btn_list =[
            (self.addition_btn,"+"),
            (self.minus_btn,"-"),
            (self.multi_btn,"*"),
            (self.division_btn,"/"),
        ]
        
        self.icon_config = {
            self.close_btn: ["./cancel.png"],
            self.plus_minus_btn: ["./maths.png"],
            
        }
        self.initial_ui()
        
    def initial_ui(self):
        self.setup_window()
        self.setupButton()
        self.init_signal_slot()
        
    def setup_window(self):
        self.setWindowFlags(QtCore.Qt.WindowType.FramelessWindowHint)
        self.setAttribute(QtCore.Qt.WidgetAttribute.WA_TranslucentBackground)
        self.output.setText("0")
        
    def mousePressEvent(self, event:QtGui.QMouseEvent):
        if event.button() == QtCore.Qt.MouseButton.LeftButton:
            self._dragPos = event.globalPosition.toPoint()
            
    def mouseMoveEvent(self, event:QtGui.QMouseEvent):
        if event.button() == QtCore.Qt.MouseButton.LeftButton and self._dragPos:
            self.move(self.pos() + event.globalPosition().toPoint() - self._dragPos)
            self._dragPos = event.globalPosition().toPoint()
            
    def mouseReleaseEvent(self, event:QtGui.QMouseEvent):
        self._dragPos = None
        
    def setupButton(self):
      for btn,conf in self.icon_config.items():
          icon = QtGui.QIcon(conf[0])
          btn.setIcon(icon)
          btn.setIconSize((QtCore.QSize(conf[1],conf[1])))
          
      self.plus_minus_btn.setCheckable(True)
      self.plus_minus_btn.setChecked(False)
      
    def init_signal_slot(self):
        self.close_btn.clicked.connect(self.close)
        self.output.textChanged.connect(self.update_clear_btn)
        self.output.textChanged.connect(self.update_font_size)
        
        #connect all button
        btn_list = self.ui.buttons_frame.findChildren(QtWidgets.QPushButton)
        for btn in btn_list:
            btn.clicked.connect(self.calculate)
            
        # Special Button Function
        self.plus_minus_btn.toggle.connect(self.change_text)
        self.percent_btn.clicked.connect(self.percent)
        
    def update_clear_btn(self):
        pass
    def update_font_size(self):
        pass
    def  calculate(self):
        pass
    def change_text(self):
        pass
    def percent(self):
        pass      
        
if __name__ == "__main__":
    app = QtWidgets.QApplication([])
    window = MainWindow()
    app.show()