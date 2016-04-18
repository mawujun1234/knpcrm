package com.mawujun.customer.continent;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.mawujun.generator.model.FieldDefine;
import com.mawujun.utils.UUID;

@Entity(name="t_country")
public class Country extends UUID{
	
	@FieldDefine(title="名称",hidden=false,genQuery=true,sort=50)
	@Column(length=60,nullable=false)
	private String name;
	@FieldDefine(title="所属洲",hidden=false,genQuery=false,sort=50)
	@Column(length=36,nullable=false)
	private String continent_id;
	
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
	public String getContinent_id() {
		return continent_id;
	}
	public void setContinent_id(String continent_id) {
		this.continent_id = continent_id;
	}

}
