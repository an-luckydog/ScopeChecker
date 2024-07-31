import os
from config import Config
from reader import AppletPathReader
from utils.decrypter import AppletDecrypter
from utils.unpacker import AppletUnpacker
from analyzer import AppletAnalyzer
from writer import ResultWriter
import shutil

if __name__ == '__main__':
    config = Config('config.json')
    config.prepare()
    type = config.type
    reader = AppletPathReader(config.input_applets_dir, type)
    problem_apis = config.problem_apis
    writer = ResultWriter(config.report_dir, problem_apis, config.append, type)

    for appid, path in reader:
        code_path = path
        if type == 'wx':
            decrypter = AppletDecrypter(appid, input_path=path,
                                        output_path=os.path.join(config.decrypted_wxapkg_dir, appid + '.wxapkg'))
            decrypter.decrypt()
            unpacker = AppletUnpacker(appid, input_path=decrypter.output_path,
                                      output_path=os.path.join(config.decrypted_code_dir, appid))
            unpacker.unpack()
            code_path = unpacker.output_path
        else:
            shutil.copytree(path, os.path.join(config.decrypted_code_dir, appid))
        analyzer = AppletAnalyzer(appid, code_path, type)
        result = analyzer.analyze(search_strings=problem_apis)
        writer.write(result)
