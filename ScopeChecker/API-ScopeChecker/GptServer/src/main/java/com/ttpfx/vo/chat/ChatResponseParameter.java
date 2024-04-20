package com.ttpfx.vo.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatResponseParameter {
   private String id;
   private String object;
   private long created; // 或者使用String类型
   private String model;
   private String system_fingerprint; // 添加缺少的字段

   private List<Choice> choices;
}
