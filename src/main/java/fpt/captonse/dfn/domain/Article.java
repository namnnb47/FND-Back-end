package fpt.captonse.dfn.domain;


import javax.persistence.*;

import java.io.Serializable;

/**
 * A Article.
 */
@Entity
@Table(name = "article")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "text")
    private String text;

    @Column(name = "date_created")
    private String dateCreated;

    @Column(name = "article_status")
    private String articleStatus;

    @Column(name = "label")
    private String label;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Article title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public Article text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public Article dateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getArticleStatus() {
        return articleStatus;
    }

    public Article articleStatus(String articleStatus) {
        this.articleStatus = articleStatus;
        return this;
    }

    public void setArticleStatus(String articleStatus) {
        this.articleStatus = articleStatus;
    }

    public String getLabel() {
        return label;
    }

    public Article label(String label) {
        this.label = label;
        return this;
    }

    public void setLabel(String label) {
        this.label = label;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Article)) {
            return false;
        }
        return id != null && id.equals(((Article) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Article{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", text='" + getText() + "'" +
            ", dateCreated='" + getDateCreated() + "'" +
            ", articleStatus='" + getArticleStatus() + "'" +
            ", label='" + getLabel() + "'" +
            "}";
    }
}
