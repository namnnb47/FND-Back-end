package fpt.captonse.dfn.service.dto;

import java.io.Serializable;

/**
 * A DTO for the {@link fpt.captonse.dfn.domain.Article} entity.
 */
public class ArticleDTO implements Serializable {
    
    private Long id;

    private String title;

    private String text;

    private String dateCreated;

    private String articleStatus;

    private String label;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getArticleStatus() {
        return articleStatus;
    }

    public void setArticleStatus(String articleStatus) {
        this.articleStatus = articleStatus;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ArticleDTO)) {
            return false;
        }

        return id != null && id.equals(((ArticleDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ArticleDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", text='" + getText() + "'" +
            ", dateCreated='" + getDateCreated() + "'" +
            ", articleStatus='" + getArticleStatus() + "'" +
            ", label='" + getLabel() + "'" +
            "}";
    }
}
