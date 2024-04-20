package com.ttpfx.vo.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Dictionary;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Choice {
   private Integer index;
   private Delta delta;
   private Dictionary logprobs; // 添加缺少的字段
   private String finish_reason; // 添加缺少的字段
}
