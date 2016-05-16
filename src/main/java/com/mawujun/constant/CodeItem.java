package com.mawujun.constant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.mawujun.generator.model.FieldDefine;
import com.mawujun.generator.model.ShowType;

@Entity
@Table(name="t_codeitem")
public class CodeItem {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(
	        name = "uuid",
	        strategy = "org.hibernate.id.UUIDGenerator"
	    )
	@FieldDefine(title="id",hidden=true)
	@Column(length=36)
	private String id;
	
	@Column(length=36)
	@FieldDefine(title="代码",sort=50,hidden=false,genQuery=true)
	private String code;
	@Column(length=36)
	@FieldDefine(title="名称",sort=40,hidden=false,genQuery=true)
	private String name;
	@Column(length=10,nullable=false)
	@Enumerated(EnumType.STRING)
	@FieldDefine(title="状态",sort=40,showType=ShowType.combobox,hidden=false)//
	private Status status;
	@FieldDefine(title="顺序",sort=40,hidden=false)
	private Integer sort;
	@Column(length=36)
	@FieldDefine(title="描述",sort=30,hidden=false,genQuery=false)
	private String remark;
	

	@FieldDefine(title="parent_id",hidden=true)
	@Column(length=36)
	private String parent_id;
	@FieldDefine(title="codeType_id",hidden=true)
	@Column(length=36,nullable=false)
	private String codeType_id;
	
	
	
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Integer getSort() {
		return sort;
	}
	public void setSort(Integer sort) {
		this.sort = sort;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}

	public String getParent_id() {
		return parent_id;
	}
	public void setParent_id(String parent_id) {
		this.parent_id = parent_id;
	}
	public String getCodeType_id() {
		return codeType_id;
	}
	public void setCodeType_id(String codeType_id) {
		this.codeType_id = codeType_id;
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
