import subprocess
import os
import platform


class AppletDecrypter:
    def __init__(self, appid,input_path="__APP__.wxapkg",
                 output_path="dec.wxapkg"):
        self.appid = appid
        self.input_path = input_path
        self.output_path = output_path

    def decrypt(self):
        if platform.system() == 'Windows':
            decrypter_path = os.path.join(os.getcwd(), 'utils', 'pc_wxapkg_decrypt', 'pc_wxapkg_decrypt.exe')
            command = f'{decrypter_path} -wxid {self.appid} -in "{self.input_path}" -out "{self.output_path}"'
            try:
                subprocess.run(command, shell=True, check=True)
                print("Decrypted Successfully!")
            except subprocess.CalledProcessError as e:
                print(f"Decryption failed, return code: {e.returncode}")
        else:
            # no decrypting needed for macOS
            os.system(f'cp {self.input_path} {self.output_path}')
