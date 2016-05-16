package com.mawujun.constant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.mawujun.generator.model.FieldDefine;

@Entity
@Table(name="t_codetype")
public class CodeType {
	@Id
	@Column(length=36)
	@FieldDefine(title="代码类型",sort=50,hidden=false,genQuery=true)
	private String id;
	@Column(length=36)
	@FieldDefine(title="名称",sort=40,hidden=false,genQuery=true)
	private String name;
	@Column(length=150)
	@FieldDefine(title="描述",sort=30,hidden=false,genQuery=false)
	private String remark;
	
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


}
