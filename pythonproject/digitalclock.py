import sys
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QHBoxLayout, QVBoxLayout
from PyQt6.QtCore import QTimer, QTime, Qt
from PyQt6.QtGui import QFont
from PyQt6 import QtWidgets

class MainDigitalClock(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Welcome to Digital Clock")
        self.setGeometry(200, 200, 800, 400)

        # Layouts
        main_layout = QVBoxLayout()
        clock_layout = QHBoxLayout()

        # Hour box
        self.hour_label = QLabel("00")
        self.hour_label.setFont(QFont("Arial", 48, QFont.Weight.Bold))
        self.hour_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.hour_label.setStyleSheet("background-color: #1976d2; color: white; border-radius: 10px; padding: 20px;")

        # Minute box
        self.minute_label = QLabel("00")
        self.minute_label.setFont(QFont("Arial", 48, QFont.Weight.Bold))
        self.minute_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.minute_label.setStyleSheet("background-color: #9c27b0; color: white; border-radius: 10px; padding: 20px;")

        # Second box
        self.second_label = QLabel("00")
        self.second_label.setFont(QFont("Arial", 48, QFont.Weight.Bold))
        self.second_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.second_label.setStyleSheet("background-color: #2e7d32; color: white; border-radius: 10px; padding: 20px;")

        # AM/PM box
        self.ampm_label = QLabel("AM")
        self.ampm_label.setFont(QFont("Arial", 32, QFont.Weight.Bold))
        self.ampm_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.ampm_label.setStyleSheet("background-color: #f57c00; color: white; border-radius: 10px; padding: 20px;")

        # Add widgets to layout
        clock_layout.addWidget(self.hour_label)
        clock_layout.addWidget(QLabel(":"))
        clock_layout.addWidget(self.minute_label)
        clock_layout.addWidget(QLabel(":"))
        clock_layout.addWidget(self.second_label)
        clock_layout.addWidget(self.ampm_label)

        main_layout.addLayout(clock_layout)
        self.setLayout(main_layout)

        # Timer to update every second
        timer = QTimer(self)
        timer.timeout.connect(self.update_time)
        timer.start(1000)

        self.update_time()  # initial call

    def update_time(self):
        now = QTime.currentTime()
        h = now.hour()
        m = now.minute()
        s = now.second()

        ampm = "PM" if h >= 12 else "AM"
        h = h % 12
        h = h if h else 12  # convert 0 to 12 for 12-hour format

    # Update the labels
        self.hour_label.setText(f"{h:02}")
        self.minute_label.setText(f"{m:02}")
        self.second_label.setText(f"{s:02}")
        self.ampm_label.setText(ampm)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainDigitalClock()
    window.show()
    sys.exit(app.exec())
    