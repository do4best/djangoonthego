import sys
from PyQt6 import QtWidgets,QtCore,QtGui
from thecacluclator import Ui_Form
class MainWindow(QtWidgets.QWidget):
    ERROR_MSG = "ERROR "
    MAX_FONT_SIZE = 100
    MIN_FONT_SIZE = 30
    FONT_SIZE_THRESHOLD = [item for item in enumerate(90,30,-5),9]
    
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
        self.close_btn = self.ui.close_btn
        self.clear_btn = self.ui.pushButton_5
        self.plus_minus_btn = self.ui.pushButton_15
        self.percent_btn = self.ui.pushButton_2
        self.addition_btn = self.ui.pushButton_6
        self.minus_btn = self.ui.pushButton_18
        self.division_btn = self.ui.pushButton_10
        self.multi_btn = self.ui.pushButton_14
        