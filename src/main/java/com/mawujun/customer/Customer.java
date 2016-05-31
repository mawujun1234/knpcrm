package com.mawujun.customer;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.mawujun.generator.model.FieldDefine;
import com.mawujun.generator.model.ShowType;

@Entity(name="t_customer")
public class Customer {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(
	        name = "uuid",
	        strategy = "org.hibernate.id.UUIDGenerator"
	    )
	@FieldDefine(title="id",hidden=true)
	@Column(length=36)
	private String id;

	
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
	
	@FieldDefine(title="跟进次数",hidden=false,genQuery=true,sort=50)
	@Column(nullable=true,updatable=false)
	private Integer followupNum;//不可修改,是统计数据
	@FieldDefine(title="初次询盘时间",hidden=false,sort=50)
	private Date inquiryDate;//初次询盘时间
	@FieldDefine(title="初次询盘内容",hidden=false,genQuery=false,sort=50)
	@Column(length=1500,nullable=true)
	private String inquiryContent;//初次询盘内容
	
	@FieldDefine(title="网址",hidden=false,genQuery=false,sort=50)
	@Column(length=160,nullable=true)
	private String website;
	
	@FieldDefine(title="地址",hidden=false,genQuery=false,sort=50)
	@Column(length=200,nullable=true)
	private String address;
	
	@FieldDefine(title="光带几年经验",hidden=false,genQuery=false,sort=50)
	@Column(length=15,nullable=true)
	private String experienceyear;
	@FieldDefine(title="占比",hidden=false,genQuery=false,sort=50)
	@Column(length=15,nullable=true)
	private String proportion;
	@FieldDefine(title="客户类型",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=15,nullable=true)
	private String custtype;
	@FieldDefine(title="员工人数",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=36,nullable=true)
	private String employeeNum;
	@FieldDefine(title="光带年采购额",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=36,nullable=true)
	private String purchasemoney;
	@FieldDefine(title="质量档次",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=36,nullable=true)
	private String qualitylevel;
	@FieldDefine(title="价格档次",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=36,nullable=true)
	private String moneylevel;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSource_id() {
		return source_id;
	}
	public void setSource_id(String source_id) {
		this.source_id = source_id;
	}
	public String getBusinessPhase_id() {
		return businessPhase_id;
	}
	public void setBusinessPhase_id(String businessPhase_id) {
		this.businessPhase_id = businessPhase_id;
	}
	public String getProperty_id() {
		return property_id;
	}
	public void setProperty_id(String property_id) {
		this.property_id = property_id;
	}
	public Integer getFollowupNum() {
		return followupNum;
	}
	public void setFollowupNum(Integer followupNum) {
		this.followupNum = followupNum;
	}
	public Date getInquiryDate() {
		return inquiryDate;
	}
	public void setInquiryDate(Date inquiryDate) {
		this.inquiryDate = inquiryDate;
	}
	public String getInquiryContent() {
		return inquiryContent;
	}
	public void setInquiryContent(String inquiryContent) {
		this.inquiryContent = inquiryContent;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getExperienceyear() {
		return experienceyear;
	}
	public void setExperienceyear(String experienceyear) {
		this.experienceyear = experienceyear;
	}
	public String getProportion() {
		return proportion;
	}
	public void setProportion(String proportion) {
		this.proportion = proportion;
	}
	public String getCusttype() {
		return custtype;
	}
	public void setCusttype(String custtype) {
		this.custtype = custtype;
	}
	public String getEmployeeNum() {
		return employeeNum;
	}
	public void setEmployeeNum(String employeeNum) {
		this.employeeNum = employeeNum;
	}
	public String getPurchasemoney() {
		return purchasemoney;
	}
	public void setPurchasemoney(String purchasemoney) {
		this.purchasemoney = purchasemoney;
	}
	public String getQualitylevel() {
		return qualitylevel;
	}
	public void setQualitylevel(String qualitylevel) {
		this.qualitylevel = qualitylevel;
	}
	public String getMoneylevel() {
		return moneylevel;
	}
	public void setMoneylevel(String moneylevel) {
		this.moneylevel = moneylevel;
	}
	public String getPayclause() {
		return payclause;
	}
	public void setPayclause(String payclause) {
		this.payclause = payclause;
	}
	@FieldDefine(title="付款条款",hidden=false,genQuery=false,sort=50,showType=ShowType.combobox)
	@Column(length=36,nullable=true)
	private String payclause;
	
	
	
	
	
	

}
