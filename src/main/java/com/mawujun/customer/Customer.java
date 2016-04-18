package com.mawujun.customer;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.mawujun.generator.model.FieldDefine;
import com.mawujun.generator.model.ShowType;
import com.mawujun.utils.UUID;

@Entity(name="t_customer")
public class Customer extends UUID{
	

	@FieldDefine(title="客户编码",hidden=false,genQuery=true,sort=50)
	@Column(length=60,nullable=false)
	private String code;
	@FieldDefine(title="客户名称",hidden=false,genQuery=true,sort=50)
	@Column(length=60,nullable=false)
	private String name;
	@FieldDefine(title="客户来源",hidden=false,genQuery=true,sort=50,showType=ShowType.combobox)
	@Column(length=60,nullable=false)
	private String source_id;//客户来源
	@FieldDefine(title="业务阶段",hidden=false,genQuery=true,sort=50,showType=ShowType.combobox)
	@Column(length=60,nullable=false)
	private String businessPhase_id;//业务阶段
	
	@FieldDefine(title="客户性质",hidden=false,genQuery=true,sort=50,showType=ShowType.combobox)
	@Column(length=60,nullable=true)
	private String property_id;
	
	@FieldDefine(title="跟进次数",hidden=false,genQuery=true,sort=50,showType=ShowType.combobox)
	@Column(nullable=true,updatable=false)
	private Integer followupNum;//不可修改,是统计数据
	@FieldDefine(title="初次询盘时间",hidden=false,sort=50)
	private Date inquiryDate;//初次询盘时间
	@FieldDefine(title="初次询盘内容",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=1500,nullable=true)
	private String inquiryContent;//初次询盘内容
	
	@FieldDefine(title="网址",hidden=false,genQuery=false,sort=50)
	@Column(length=160,nullable=true)
	private String website;
	
	@FieldDefine(title="地址",hidden=false,genQuery=false,sort=50)
	@Column(length=200,nullable=true)
	private String address;
	

}
