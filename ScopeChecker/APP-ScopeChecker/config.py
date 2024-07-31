import json
import os.path
import time


class Config:
    def __init__(self, config_file):
        with open(config_file) as f:
            config = json.load(f)
            self.input_applets_dir = config.get('input_applets_dir', '')
            self.output_results_dir = config.get('output_results_dir', os.path.join(os.getcwd(), 'output_last'))
            self.problem_apis = config.get('problem_apis', [])
            self.type = config.get('type', 'wx')
            self.append = config.get('append', True)
            if not self.append:
                self.start_time = time.localtime()
                self.output_results_dir += time.strftime("%Y-%m-%d-%H-%M-%S", self.start_time)
            self.decrypted_wxapkg_dir = os.path.join(self.output_results_dir, 'decrypted_wxapkg')
            self.decrypted_code_dir = os.path.join(self.output_results_dir, 'decrypted_code')
            self.applet_info_dir = os.path.join(self.output_results_dir, 'applet_info')
            self.report_dir = os.path.join(self.output_results_dir, 'report')

    def prepare(self):
        if not os.path.exists(self.input_applets_dir):
            print('input_applets_dir not exists')
            exit(-1)
        if not os.path.exists(self.output_results_dir):
            os.makedirs(self.output_results_dir)
            if self.type == 'wx':
                for tmp_dir in ('decrypted_wxapkg', 'decrypted_code'):
                    os.makedirs(os.path.join(self.output_results_dir, tmp_dir))
            else:
                os.makedirs(os.path.join(self.output_results_dir, 'decrypted_code'))
        if not os.path.exists(self.report_dir):
            os.makedirs(self.report_dir)
