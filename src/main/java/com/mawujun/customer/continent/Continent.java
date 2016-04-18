package com.mawujun.customer.continent;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.mawujun.generator.model.FieldDefine;
import com.mawujun.utils.UUID;

@Entity(name="t_continent")
public class Continent extends UUID{
	@FieldDefine(title="名称",hidden=false,genQuery=true,sort=50)
	@Column(length=60,nullable=false)
	private String name;
	@FieldDefine(title="备注",hidden=false,genQuery=false,sort=50)
	@Column(length=160,nullable=false)
	private String remark;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
	

}
