package com.mawujun.customer.baseinfo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.mawujun.generator.model.FieldDefine;

/**
 *  客户来源
 * @author mawujun
 *
 */
@Entity(name="t_businessphase")
public class BusinessPhase {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(
	        name = "uuid",
	        strategy = "org.hibernate.id.UUIDGenerator"
	    )
	@FieldDefine(title="id",hidden=true)
	@Column(length=36)
	private String id;
	
	@FieldDefine(title="名称",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String name;
	@FieldDefine(title="备注",hidden=false,genQuery=false,sort=50)
	@Column(length=160,nullable=true)
	private String remark;
	
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
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	

}
