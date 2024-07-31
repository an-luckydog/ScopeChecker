import os
import subprocess
import shutil


class AppletUnpacker:
    def __init__(self, appid, input_path='unpacker', output_path='output'):
        self.appid = appid
        self.input_path = input_path
        self.output_path = output_path

    def unpack(self):
        unpacker_path = os.path.join(os.getcwd(), 'utils', 'wxappUnpacker', 'wuWxapkg.js')
        command = f'node {unpacker_path} {self.input_path}'
        try:
            subprocess.run(command, shell=True, check=True)
            print("Unpacker command executed successfully")
        except subprocess.CalledProcessError as e:
            print(f"Unpacker command execution failed, return code: {e.returncode}")
        except Exception as e:
            print(f"Error occurred: {str(e)}")
        command_output = os.path.join(os.path.dirname(self.input_path), self.appid)
        if os.path.exists(command_output):
            shutil.move(command_output, self.output_path)
